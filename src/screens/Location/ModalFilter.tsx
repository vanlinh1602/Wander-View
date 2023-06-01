import { Button, FormControl, Modal, Select } from 'native-base';
import React, { useState } from 'react';

import { categories } from '../../lib/options';
import type { Filter } from './index';

type Props = {
  handleClose: () => void;
  handleFilter: (value: Filter) => void;
};

const ModalFilter = ({ handleClose, handleFilter }: Props) => {
  const [filter, setFilter] = useState<Filter>({});

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
                <Select.Item label={category.title} value={category.title} />
              ))}
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
