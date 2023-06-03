import { Button, FormControl, Modal, Select } from 'native-base';
import React, { useState } from 'react';

import { cities } from '../../lib/common';
import type { Address } from '../../types/loaction';

type Props = {
  address: Address;
  handleClose: () => void;
  handleSubmit: (data: Address) => void;
};

const SelectAddress = ({
  handleClose,
  handleSubmit,
  address: addressProp,
}: Props) => {
  const [address, setAddress] = useState<Address>(addressProp);

  return (
    <Modal isOpen>
      <Modal.Content>
        <Modal.Header>Select Address</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Province</FormControl.Label>
            <Select
              placeholder="Select province"
              onValueChange={value =>
                setAddress(pre => ({
                  ...pre,
                  province: value,
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
                setAddress(pre => ({
                  ...pre,
                  district: value,
                }))
              }>
              {address.province
                ? Object.entries(cities[address.province].districts).map(
                    ([key, value]) => (
                      <Select.Item key={key} label={value.name} value={key} />
                    ),
                  )
                : null}
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label>Ward</FormControl.Label>
            <Select
              placeholder="Select ward"
              onValueChange={value =>
                setAddress(pre => ({
                  ...pre,
                  ward: value,
                }))
              }>
              {address.district
                ? Object.entries(
                    cities[address.province].districts[address.district]
                      .wards ?? {},
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
            <Button
              onPress={() => {
                handleSubmit(address);
                handleClose();
              }}>
              Confirm
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default SelectAddress;
