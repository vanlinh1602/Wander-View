import { Button, FormControl, Modal, Select } from 'native-base';
import React, { useState } from 'react';

import { cities } from '../../lib/common';
import { categories } from '../../lib/options';
import type { Filter } from './index';

type Props = {
  handleClose: () => void;
  handleFilter: (value: Filter) => void;
};

const ModalFilter = ({ handleClose, handleFilter }: Props) => {
  const [filter, setFilter] = useState<Filter>({
    address: {
      province: '',
    },
  });

  const handleSubmit = () => {
    handleFilter(filter);
    handleClose();
  };
  return (
    <Modal isOpen>
      <Modal.Content>
        <Modal.Header>Filter options</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Category</FormControl.Label>
            <Select
              onValueChange={value =>
                setFilter(pre => ({
                  ...pre,
                  category: value,
                }))
              }>
              {categories.map(category => (
                <Select.Item
                  key={category.title}
                  label={category.title}
                  value={category.title}
                />
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label>Province</FormControl.Label>
            <Select
              placeholder="Select province"
              onValueChange={value =>
                setFilter(pre => ({
                  ...pre,
                  address: {
                    ...pre.address,
                    province: value,
                  },
                }))
              }>
              {Object.entries(cities).map(([key, value]) => (
                <Select.Item key={key} label={value.name} value={key} />
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label>District</FormControl.Label>
            <Select
              placeholder="Select district"
              onValueChange={value =>
                setFilter(pre => ({
                  ...pre,
                  address: {
                    ...pre.address!,
                    district: value,
                  },
                }))
              }>
              {filter.address?.province
                ? Object.entries(
                    cities[filter.address?.province].districts,
                  ).map(([key, value]) => (
                    <Select.Item key={key} label={value.name} value={key} />
                  ))
                : null}
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label>Ward</FormControl.Label>
            <Select
              placeholder="Select ward"
              onValueChange={value =>
                setFilter(pre => ({
                  ...pre,
                  address: {
                    ...pre.address!,
                    ward: value,
                  },
                }))
              }>
              {filter.address?.district
                ? Object.entries(
                    cities[filter.address.province].districts[
                      filter.address.district
                    ].wards ?? {},
                  ).map(([key, value]) => (
                    <Select.Item key={key} label={value.name} value={key} />
                  ))
                : null}
            </Select>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={handleClose}>
              Cancel
            </Button>
            <Button onPress={handleSubmit}>Confirm</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalFilter;
