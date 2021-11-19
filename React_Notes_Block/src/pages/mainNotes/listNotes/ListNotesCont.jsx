import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box } from '@material-ui/core';
import ListItem from '@mui/material/ListItem';
import GridMain, {
  ListActive,
  ListNoActive,
  NoteText,
  Title,
  Description,
  NoteActions,
  NoAddedNotes,
} from './styled';

import {
  ButtonEdit,
  ButtonShare,
  InputChange,
  ERROR_MESSAGES,
} from './ListNotesReciever';

const ListNotes = ({
  handleItem,
  handleShare,
  handleSaveNote,
  handleDelete,
  chooseNote,
  sliceDescription,
  callToEditNote,
  noteList,
}) => {
  const { noAddedNotes } = ERROR_MESSAGES;

  return (
    <GridMain container spacing={2}>
      {noteList.length ? (
        noteList.map((item, index) => (
          <Grid item xs={12} sm={6} md={4}>
            {item.isActive ? (
              <ListActive
                onClick={() => handleItem(item.id, noteList, chooseNote)}
                sx={{ width: '100%', padding: '0px', cursor: 'pointer' }}
                key={`${item.id}gridlist`}
              >
                <NoteText key={`${item.id}listbox`}>
                  <ListItem>
                    <Title variant='h6' id={item.title}>
                      {item.title}
                    </Title>
                  </ListItem>

                  <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                    <Description variant='body2'>
                      {sliceDescription(item.description)}
                    </Description>
                  </ListItem>

                  <ListItem>
                    <Typography variant='subtitle2'>{item.date}</Typography>
                  </ListItem>
                </NoteText>
              </ListActive>
            ) : (
              <ListNoActive
                onClick={() => handleItem(item.id, noteList, chooseNote)}
                sx={{ width: '100%', padding: '0px', cursor: 'pointer' }}
                key={`${item.id}gridlist`}
              >
                <NoteText key={`${item.id}listbox`}>
                  <ListItem>
                    <Title variant='h6' id={item.title}>
                      {item.title}
                    </Title>
                  </ListItem>

                  <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                    <Description variant='body2'>
                      {sliceDescription(item.description)}
                    </Description>
                  </ListItem>

                  <ListItem>
                    <Typography variant='subtitle2'>{item.date}</Typography>
                  </ListItem>
                </NoteText>
              </ListNoActive>
            )}

            <NoteActions
              key={`${item.id}buttonStack`}
              direction='row'
              spacing={-3}
              alignItems='flex-start'
              justifyContent='flex-start'
            >
              <Box key={`${item.id}edit`}>
                <ButtonEdit
                  handleItem={handleItem}
                  callToEditNote={callToEditNote}
                  noteList={noteList}
                  id={item.id}
                />
                <ButtonShare
                  handleShare={handleShare}
                  noteList={noteList}
                  id={item.id}
                />
              </Box>

              <InputChange
                key={`${item.id}input`}
                handleSaveNote={handleSaveNote}
                handleDelete={handleDelete}
                isChange={item.isChange}
                description={item.description}
                id={item.id}
                index={index}
                currentState={noteList}
              />
            </NoteActions>
          </Grid>
        ))
      ) : (
        <NoAddedNotes>
          <Typography component='h5' variant='h5' align='center'>
            {noAddedNotes}
          </Typography>
        </NoAddedNotes>
      )}
    </GridMain>
  );
};

ListNotes.propTypes = {
  noteList: PropTypes.string,
  callToEditNote: PropTypes.func,
  sliceDescription: PropTypes.func,
  chooseNote: PropTypes.func,
  handleItem: PropTypes.func,
  handleShare: PropTypes.func,
  handleSaveNote: PropTypes.func,
  handleDelete: PropTypes.func,
};

ListNotes.defaultProps = {
  noteList: 'noteList',
  callToEditNote: 'callToEditNote',
  sliceDescription: 'sliceDescription',
  chooseNote: 'chooseNote',
  handleItem: 'handleItem',
  handleShare: 'handleShare',
  handleSaveNote: 'handleSaveNote',
  handleDelete: 'handleDelete',
};

export default ListNotes;
