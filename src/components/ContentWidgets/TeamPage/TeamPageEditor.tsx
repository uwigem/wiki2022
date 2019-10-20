import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Person } from './TeamPage'
import { Select, MenuItem, Grid, Card } from '@material-ui/core';

export const TeamPageEditor: React.FC<WidgetEditorProps> = ({
    originalContent,
    editedContent,
    setEditedContentOnChange
}) => {
    let teamPage_content = editedContent.teamPage_content || [{firstName: "", lastName: "", bio: "", github: "", linkedin: ""} as Person];

    // const updateFirstName = (e: string, index: number) => {
    //     let person = teamPage_content[index]
    //     person.firstName = e;
    //     teamPage_content[index] = person;
    //     setEditedContentOnChange("teamPage_content", teamPage_content);
    // }

    // const updateLastName = (e: string, index: number) => {
    //     let person = teamPage_content[index]
    //     person.lastName = e;
    //     teamPage_content[index] = person;
    //     setEditedContentOnChange("teamPage_content", teamPage_content);
    // }

    // const updateBio = (e: string, index: number) => {
    //     let person = teamPage_content[index]
    //     person.bio = e;
    //     teamPage_content[index] = person;
    //     setEditedContentOnChange("teamPage_content", teamPage_content);
    // }

    // const updateGithub = (e: string, index: number) => {
    //     let person = teamPage_content[index]
    //     person.github = e;
    //     teamPage_content[index] = person;
    //     setEditedContentOnChange("teamPage_content", teamPage_content);
    // }

    // const updateLinkedIn = (e: string, index: number) => {
    //     let person = teamPage_content[index]
    //     person.linkedin = e;
    //     teamPage_content[index] = person;
    //     setEditedContentOnChange("teamPage_content", teamPage_content);
    // }

    // const addPerson = () => {
    //     teamPage_content.push({firstName: "", lastName: "", bio: "", github: "", linkedin: ""} as Person);
    //     setEditedContentOnChange("teamPage_content", teamPage_content);
    // }

    let data = teamPage_content.sort((a, b) => {
        if (a.firstName < b.firstName) {
            return -1;
        } else if (b.firstName < a.firstName) {
            return 1;
        } else {
            return 0;
        }
    });

    return <>
        {/* <Grid fluid style={{ padding: 0, margin: 20, marginTop: 30, marginBottom: 20 }}>
            <Fade clear cascade>
                <Row style={{ padding: 0, margin: 'auto', textAlign: 'center' }}>
                    {this.filteredCategories.sort().map((d, i) => {
                        return <Col xs key={'selector' + i}><div onClick={() => {
                            this.setState({ filterTo: d });
                        }} style={{
                            cursor: 'pointer', fontStyle: 'italic',
                            borderBottom: this.state.filterTo === d ? '3px solid black' : '',
                            transition: 'border 0.2s'
                        }} className={"filterButton"}>{d}</div></Col>
                    })}
                </Row>
            </Fade>
        </Grid>

        {this.sections.map((sect, sectIndex) => {
            return <div key={'sect' + sectIndex} style={{ marginBottom: 20 }}>
                <div style={{ margin: 'auto', width: '100%', textAlign: 'center', fontSize: 50 }}>{sect}</div>
                <Grid fluid style={{ padding: 0, margin: 0 }}>
                    
                    <Row style={{ padding: 0, margin: 0 }} center="xs">
                        {data && data.map((d, i) => {
                            let filter;
                            switch (sect) {
                                case "Leadership":
                                    filter = d.FILTER && d.FILTER.indexOf(sect) === -1;
                                    break;
                                case "Members":
                                    filter = d.FILTER && (d.FILTER.indexOf('Adviser') !== -1 || d.FILTER.indexOf('Leadership') !== -1 || d.FILTER.indexOf('PIs') !== -1)
                                    break;
                                case "Advisers":
                                    filter = d.FILTER && d.FILTER.indexOf('Adviser') === -1;
                                    break;
                                case "PIs":
                                    filter = d.FILTER && d.FILTER.indexOf('PIs') === -1;
                                    break;
                                default:
                                    filter = d.FILTER && (d.FILTER.indexOf('Adviser') !== -1 || d.FILTER.indexOf('Leadership') !== -1)
                                    break;
                            }
                            if (filter) {
                                return null;
                            }
                            let x = d.XPOS ? d.XPOS : 50;
                            let y = d.YPOS ? d.YPOS : 20;
                            let size = d.CUSTSIZE ? d.CUSTSIZE : 100;
                            return <Col md={3} key={'subimg' + i} style={{
                                textAlign: 'center',
                                margin: 10,
                                transition: 'height 0.5s',
                                maxWidth: 380,
                                minWidth: 280,
                            }}><div style={{
                                width: '100%',
                                maxWidth: 380,
                                minWidth: 280,
                                height: 'auto',
                                minHeight: 380,
                                backgroundColor: d.PICTURE === "http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png" && this.state.loaded[i] ? 'lightgray' : 'white',
                                margin: 'auto',
                                borderRadius: 20,
                                overflow: 'hidden',
                                cursor: d.BIO === '' ? 'normal' : 'pointer',
                                position: 'relative',
                                filter: (d.FILTER && d.FILTER.indexOf(this.state.filterTo) !== -1) || this.state.filterTo === "All" ? '' : 'blur(5px)',
                                boxShadow: '5px 5px 5px #999999',
                                transition: 'filter 0.2s, background-color: 0.2s'
                            }} onClick={() => {
                                if (d.BIO !== '') {
                                    this.toggleExpand(i);
                                }
                            }}
                                onMouseEnter={() => this.hover(i)}
                                onMouseLeave={() => this.removeHover(i)}
                            >
                                    <Fade when={this.state.loaded[i] === true}><div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        top: 0,
                                        left: 0,
                                        height: `${this.state.cardBody}%`,
                                        backgroundColor: 'white',
                                        background: `url(${d.PICTURE}) ${x}% ${y}% no-repeat`,
                                        backgroundSize: `${size ? size : 100}%`
                                    }}></div></Fade>
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        bottom: 0,
                                        left: 0,
                                        height: this.state.expanded[i] ? '100%' : `${100 - this.state.cardBody}%`,
                                        backgroundColor: this.state.hover[i] || this.state.expanded[i] ? this.mainColor : 'white',
                                        transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                                        color: this.state.hover[i] || this.state.expanded[i] ? 'white' : 'black',
                                    }} className={"scrollBox"}>
                                        <Scrollbars style={{
                                            position: 'absolute',
                                            margin: 'auto',
                                            left: 0,
                                            right: 0,
                                            textAlign: 'center',
                                            height: '100%',
                                            opacity: this.state.expanded[i] ? 1 : 0
                                        }}>
                                            <Fade duration={500} clear when={this.state.expanded[i] === true}>
                                                <div style={{
                                                    padding: 20,
                                                    fontSize: 16,
                                                }}>{d.BIO.split("\\n").map((e, j) => {
                                                    return <p key={d.NAME + 'spl' + j} style={{ marginTop: 10 }}>{e.trim()}</p>
                                                })}

                                                    <div style={{
                                                        color: 'white',
                                                        padding: 0,
                                                        marginTop: 10
                                                    }}>
                                                        {d.GITHUB &&
                                                            <a href={d.GITHUB} target="_blank" className="icon">
                                                                <FontAwesomeIcon icon={faGithub} size={"2x"} />
                                                            </a>}
                                                        {d.LINKEDIN &&
                                                            <a href={d.LINKEDIN} target="_blank" className="icon">
                                                                <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                                                            </a>}
                                                    </div>
                                                </div>
                                            </Fade>
                                        </Scrollbars>
                                        <Fade duration={500} clear when={this.state.expanded[i] !== true}>
                                            <div style={{
                                                position: 'absolute',
                                                textAlign: 'center',
                                                margin: 'auto',
                                                left: 0,
                                                right: 0
                                            }}>
                                                <div style={{
                                                    textTransform: 'uppercase',
                                                    marginTop: 10,
                                                    fontWeight: 'bold',
                                                    fontSize: 20,
                                                    letterSpacing: 3,
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                }}>{d.NAME}</div>
                                                <div style={{
                                                    marginTop: 10
                                                }}>{d.ROLE}</div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Grid>
            </div> */}
        })}
        {/* <h3>Person to Edit</h3>
        <div>
            <Grid>
                {teamPage_content.map((person, index) => (
                    <Card className="person" key={index}>
                        <h3>First Name</h3>
                        <input type="text" value={person.firstName} onChange={(e) => updateFirstName(e.target.value, index)} />
                        <h3>Last Name</h3>
                        <input type="text" value={person.lastName} onChange={(e) => updateLastName(e.target.value, index)} />
                        <h3>Bio</h3>
                        <input type="text" value={person.bio} onChange={(e) => updateBio(e.target.value, index)} />
                        <h3>Github Link</h3>
                        <input type="text" value={person.github} onChange={(e) => updateGithub(e.target.value, index)} />
                        <h3>LinkedIn Link</h3>
                        <input type="text" value={person.linkedin} onChange={(e) => updateLinkedIn(e.target.value, index)} />
                    </Card>
                ))}
            </Grid>
            <button onClick={addPerson}>Add Person</button>
        </div> */}
    </>
}