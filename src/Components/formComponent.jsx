import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;

  overflow-x: hidden;
`;
export const FormGroup = styled.div`
  color: #fff;
  display: block;
  width: 300px;
  margin: 10px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #64748b;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: #fff;

  background-color: #f1f5f9;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Textarea = styled.textarea`
  margin-bottom: 0.5em;
  color: black;
  display: block;
  width: 100%;

  background-color: #f1f5f9;
  border-radius: 3px;
  padding: 0.5em;
`;

export const Paragraph = styled.p`
  color: black;
`;

export const Button = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #2563eb;
  color: white;
  border: 2px solid white;
`;
