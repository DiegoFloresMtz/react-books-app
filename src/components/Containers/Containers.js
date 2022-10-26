import React from "react";
import { FilterList } from "@primer/react";
import styled from "styled-components";
import { VisibilityFilters } from "../../utils/index";

export const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  width: 100%;
  li:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding-bottom: 1rem;
`;

export const BookTitle = styled.span`
  ${props => props.read && "text-decoration: line-through;"}
`;

export const Filters = ({
  visibilityFilter,
  onVisibilityFilterChange,
  allCount,
  readsCount,
  pendingCount
}) => (
  <FilterList style={{ width: "100%" }} marginTop="1rem">
    <FilterList.Item
      selected={visibilityFilter === VisibilityFilters.ALL}
      onClick={() => onVisibilityFilterChange(VisibilityFilters.ALL)}
    >
      All the books
      <span title="results" class="count">
        {allCount}
      </span>
    </FilterList.Item>
    <FilterList.Item
      selected={visibilityFilter === VisibilityFilters.READS}
      onClick={() => onVisibilityFilterChange(VisibilityFilters.READS)}
    >
      <span title="results" class="count">
        {readsCount}
      </span>
      Read Books
    </FilterList.Item>
    <FilterList.Item
      selected={visibilityFilter === VisibilityFilters.PENDING}
      onClick={() => onVisibilityFilterChange(VisibilityFilters.PENDING)}
    >
      <span title="results" class="count">
        {pendingCount}
      </span>
      Wishlisted Books
    </FilterList.Item>
  </FilterList>
);

export const Container = ({ children }) => (
  <div style={{ flexDirection:"column", alignItems:"center", margin:"2rem" }} >
      {children}
    </div>
);
