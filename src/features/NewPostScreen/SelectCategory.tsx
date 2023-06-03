import _ from 'lodash';
import { Button, HStack, Modal, Text } from 'native-base';
import React, { useMemo, useState } from 'react';

import { categories } from '../../lib/options';

type Props = {
  categorySelect: string[];
  handleClose: () => void;
  handleSubmit: (data: string[]) => void;
};

const SelectCategory = ({
  handleClose,
  handleSubmit,
  categorySelect,
}: Props) => {
  const [categorySlected, setCategorySelected] =
    useState<string[]>(categorySelect);

  const categoryTitle = useMemo(() => {
    return categories.map(category => category.title);
  }, []);

  return (
    <Modal isOpen>
      <Modal.Content>
        <Modal.Header>Select category</Modal.Header>
        <Modal.Body>
          {_.chunk(categoryTitle, 3).map((subTitle, index) => (
            <HStack key={index}>
              {subTitle.map(title => (
                <Text
                  key={title}
                  style={{
                    padding: 5,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    margin: 5,
                    color: 'white',
                    borderRadius: 24,
                    borderColor: categorySlected?.includes(title)
                      ? 'green'
                      : 'grey',
                    backgroundColor: categorySlected?.includes(title)
                      ? 'green'
                      : 'grey',
                  }}
                  onPress={() => {
                    if (categorySlected?.includes(title)) {
                      setCategorySelected(pre =>
                        pre.filter(value => value !== title),
                      );
                    } else {
                      setCategorySelected(pre => [...pre, title]);
                    }
                  }}>
                  {title}
                </Text>
              ))}
            </HStack>
          ))}
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
                handleSubmit(categorySlected);
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

export default SelectCategory;
