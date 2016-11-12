import styled, { css } from 'styled-components';
import { Panel } from 'react-bootstrap';

const hoverStyle = css`
  background-color: gray;
  color: gray;
`;

export const StyledCollection = styled.default.div`
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;

  ${props => props.isDragging && hoverStyle}

  .panel-default {
    background-color: red;
  }

  .panel-heading li {
    width: 48%;
    text-align: center;
    cursor: pointer;
    padding-bottom: 5px;
  }
  .panel-heading li.active {
    border-bottom: 3px solid #c8c4c4;
    font-weight: bold;
  }
`;

export const StyledRequest = styled.default.div`
  ul, li {
    ${props => props.isDragging && hoverStyle}
  }
`;
