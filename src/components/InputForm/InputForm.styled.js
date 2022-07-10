import styled from "styled-components";

export const AddForm = styled.form`
margin-bottom: 10px;
   gap: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #ffffff4f;
   border: solid 5px #646eab;
   padding: 33px;
   border-radius: 50px;
` 
export const AddFormLabel = styled.label`
   align-items: center;
   display: flex;
   justify-content: center;
   font-size: 20px;
color: #066305;
` 
export const AddFormInput = styled.input`
   align-items: center;
   display: flex;
   justify-content: center;
   font-size: 20px;
   margin-left: ${p => (p.name === 'name') ? '25px ': '20px'};
border: 3px solid #646eab;
border-radius: 10px;
background-color: transparent;
:hover,
:focus{
   border-color: green;
   outline: green;
}
` 
export const AddFormButton = styled.button`
   width: 150px;
   height: 40px;
   margin-top: 10px;
   background-color: #8073b3;
   transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
   color: #194904;
   font-size: 20px;
   font-weight: 700;
   border-radius: 10px;
   border: none;
   cursor: pointer;
     :hover{
      transform: scale(1.03);
      box-shadow: rgb(39 37 37) -2px 3px 4px;
      background-color: #54506b;
      color: rgb(186, 161, 153);
    }
` 





