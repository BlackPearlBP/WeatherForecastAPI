import styled from "styled-components";
import { FaSearch } from "react-icons/fa"; 

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 20%;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(191, 186, 176, 0.1);
  border: none;
  outline: none;
  width: 100%;
  
  &:hover {
    border: 2px solid #595856;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  color: #595856;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    color: #262626;
  }
`;
