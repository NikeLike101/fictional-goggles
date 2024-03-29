import { createButton } from "./createButton.js"

export const createModal = (content, onDoneText, onCancelText, onDone,onCancel) => {
    const ACTIONS_CONTAINER_HEIGHT = 40
    const destroyModal = () => {
        newModal.remove()
    } 

     const newModal = document.createElement('div')
     newModal.id = 'our-modal'
     newModal.style  = ` 
         background: rgba(0,0,0,0.5);
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100vh;
         display: flex;
         justify-content: center;
         align-items: center
     `
     const modalPaper = document.createElement('div')
     modalPaper.style = `
     background: #ddd;
     borderRadius: 5px;
     min-width: 300px;
     min-height: 600px;
     position: relative;
     `
 


     newModal.addEventListener('click', (e)=> {
         console.log(e.target.id, e, e.composedPath());
         if(e.target.id === 'our-modal') newModal.remove()
     
     })
 
     const modalPaperContent = document.createElement('div')
     modalPaperContent.style = `
     
     padding: 10px;
     margin-bottom: ${ACTIONS_CONTAINER_HEIGHT}px`;
     if (content instanceof HTMLElement) {
         modalPaperContent.append(content)
     } else {
         modalPaperContent.innerHTML = content
     }
     modalPaper.append(modalPaperContent)
 
     const actionsContainer = document.createElement('div')
     actionsContainer.style = `
     display: flex;
     gap: 8px;
     position: absolute;
     bottom: 0;
     left: 0;
     padding: 4px;
     height: ${ACTIONS_CONTAINER_HEIGHT}px;
     width: 100%;
         background: #ff0;
     `  




 
     if (onCancelText && onCancel !== undefined) {
         

        const handleClose = () => {
            destroyModal()
            onCancel()
        }
        const onCloseButton  = createButton(onCancelText, handleClose, `background: #ccc;`)
       actionsContainer.append(onCloseButton)
     }
     if(onDoneText && onDone !== undefined) {
        const handleDone = (e) => {
            console.log('asdsa', e);
            onDone()
            
            destroyModal()
        }
        const onDoneButton  =  createButton(onDoneText, handleDone,`background: #0d55dd;`)
        actionsContainer.append(onDoneButton)
    
    }
     
    

     modalPaper.append(actionsContainer)
 
 
 
     newModal.append(modalPaper)
     
 
 
 
 
     document.body.append(newModal)
 }