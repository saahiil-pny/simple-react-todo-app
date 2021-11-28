import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const ListInputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 25px;
  margin: 0;
  background-color: #fafafa;
`;

export const ListInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 60%;
  height: 40px;
  margin: 0;
  background-color: #fafafa;
`;

export const ListButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 50;
  margin-top: 50;
  background-color: #fafafa;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;
