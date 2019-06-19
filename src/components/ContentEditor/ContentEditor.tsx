import React, { useState } from 'react';
import { ContentData } from '../_data/Data';
import 'firebase/database';
import 'firebase/auth';
import { useAuth } from '../../hooks/useAuth';
import './ContentEditor.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

type ContentEditorProps = {
    contentData: ContentData,
}

export const ContentEditor: React.FC<ContentEditorProps> = ({ contentData }) => {
    const [userLoading, setUserLoading] = useState<boolean>(true);
    const [pageToEdit, setPageToEdit] = useState<string>("");
    const user = useAuth(setUserLoading);

    // console.log(user, userLoading);
    return <>
        {contentData &&
            <div className="content-editor-banner">
                <Grid>
                    <Row>
                        <Col md={6}>
                            <h3>Washington iGEM Editor</h3>
                        </Col>
                        <Col md={6}>
                            <p>You are editing the <span className="content-editor-page-editing">/{pageToEdit}</span> page.</p>
                            <FormControl className="content-editor-formcontrol">
                                <InputLabel>Select a page to edit</InputLabel>
                                <Select
                                    value={pageToEdit}
                                    onChange={(e) => {
                                        setPageToEdit(e.target.value as string);
                                    }}>
                                    {Object.keys(contentData).map(contentDataKey => {
                                        return <MenuItem value={contentDataKey}>
                                            {contentDataKey}
                                        </MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </Col>
                    </Row>
                </Grid>

            </div>
        }
    </>
}