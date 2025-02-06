import styled from "styled-components";

interface MenuItemProps {
    active?: boolean; 
}

export const Background = styled.div`
    display: flex;
    grid-gap: 10vh;
    padding: 20px;
`;

export const MenuItem = styled.div<MenuItemProps>` 
    cursor: pointer;
    font-size: 22px;
    color: ${(props) => (props.active ? "#262626" : "#595856")};
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    border-bottom: ${(props) => (props.active ? "2px solid #4988BF" : "2px solid transparent")};
    transition: color 0.5s ease-in-out, font-weight 0.5s ease-in-out, border-bottom 0.5s ease-in-out;

`;
