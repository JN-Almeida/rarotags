import React, { KeyboardEvent, useEffect, useState } from 'react'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'

import { Container } from './style';

const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function TagsInput(props) {
  const { onSelectTags, tags, setTags, ...other } = props
  const [selectedItem, setSelectedItem] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  useEffect(() => {
    setSelectedItem(tags)
  }, [tags])

  const handleKeyUp = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim()

    if ((event.key === 'Enter' || event.key === 'Tab') && value !== '') {
      event.preventDefault()
      const allEmails = value.split(';').filter((mail: string) => {
        const isSame = selectedItem.some((x) => x === mail)
        return emailValidation.test(mail) && !isSame
      })
      setSelectedItem([...selectedItem, ...allEmails])
      setInputValue('')
    }

    if (selectedItem.length && !value.length && event.key === 'Backspace') {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1))
    }
  }

  const handleDelete = (item) => () => {
    const newSelectedItem = [...selectedItem]
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1)
    setSelectedItem(newSelectedItem)
  }

  return (
    <Container>
      <TextField
        InputProps={{
          startAdornment: selectedItem.map((item) => (
            <Chip key={item} tabIndex={-1} label={item} onDelete={handleDelete(item)} />
          )),
        }}
        onKeyDown={handleKeyUp}
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
        {...other}
      />

      <button type="button" onClick={() => setTags(selectedItem)}>
        enviar
      </button>
    </Container>
  )
}
TagsInput.defaultProps = {
  tags: [],
}
