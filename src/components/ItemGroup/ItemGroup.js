import React, { useState, useMemo } from "react";
import { Flex, Box } from "rebass";

import Search from "../Search";
import ItemCard from "../ItemCard";
import Button from "../Button";

function ItemGroup({ data, addToCart }) {
  const [filter, setFilter] = useState();
  const [filteredData, setFilteredData] = useState();

  useMemo(
    () =>
      filter
        ? setFilteredData(
            data.filter(
              item =>
                item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
            )
          )
        : setFilteredData(data),
    [data, filter]
  );

  if (!filteredData || filteredData.length === 0) {
    return (
      <Flex flexDirection="column" mx="auto" width={500}>
        <h1>No items found</h1>
        <Button onClick={() => setFilter(undefined)}>Clear Filter</Button>
      </Flex>
    );
  }

  return (
    <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
      <Flex flexDirection="column" width="80%">
        <Flex>
          <Box width={1 / 2}>
            <Search onEnter={filterString => setFilter(filterString)} />
          </Box>
          <Flex
            width={1 / 2}
            justifyContent="flex-end"
            alignItems="center"
            pr={20}
          >
            {filter && (
              <Button
                onClick={() => setFilter(undefined)}
                style={{ height: 40 }}
              >
                Clear filters
              </Button>
            )}
          </Flex>
        </Flex>
        <Flex flexWrap="wrap" mt={20}>
          {filteredData.map(item => (
            <ItemCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              description={item.description}
              onAddToCart={() => {
                addToCart(item);
              }}
            />
          ))}
        </Flex>
      </Flex>
    </div>
  );
}

export default ItemGroup;
