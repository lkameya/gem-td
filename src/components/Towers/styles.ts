import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 400px;
`;

export const TowerName = styled.div`
  width: 50%;
  text-align: center;
`;

export const Combinations = styled.div`
  width: 50%;
  text-align: center;
`;
