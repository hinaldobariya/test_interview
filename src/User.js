import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {ChatFill, Mailbox2, PhoneFill, TelephoneFill, Whatsapp} from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal'


export default function User() {
  const [showsidebar, setShowsidebar] = React.useState(false);
  const [showmodal, setShowmodal] = React.useState(false);
  const [client, setClient] = React.useState('');
  const[showdiv , setShowdiv] = React.useState(false);
  const[showbutton,setShowbutton] = React.useState(false)
  let [cc,setCC]= React.useState("")
  let [subject,setSubject]=React.useState("")
  let [text,setText] = React.useState(false);
  const close = () => setShowsidebar(false);
  const show = () => setShowsidebar(true);

  const closemodal = () => setShowmodal(false);
  const smodal = () => setShowmodal(true);
  function hidehandler(e){
    setClient(e.target.value)
    setShowdiv(true)
    setShowbutton(true)

  }
  function change_cc(){
    setCC("Pelpola Vijaya,Caroll Doyle")
    setSubject("Internal Milestone Update Needed")
    setText(true)

  }

  return (
    <div>
      <div className="container_main">
        <div className="dropdown_form">

          <div>
            <Form.Select value={client} onChange={hidehandler}>
              <option></option>
              <option >Steve Smith</option>
              <option >Eric Richard</option>
              <option >James Jones</option>
            </Form.Select>

            {
              showdiv?<div className="content">
                <h3>{client}</h3>
                <p>Company</p>
                <p><u>Cotton Textile Pvt Ltd</u></p>

                <h3>Contact Details</h3>

                <p>Email</p>
                <p><u>Steve@yahoo.com</u></p> <br />

                <p>Whatapp</p>
                <p><u>124578963</u></p><br />

                <p>Webchat</p>
                <p><u>Steve@yahoo.com</u></p> <br />

                <p>Phone Number</p>
                <p><u>124578963</u></p>
              </div>:null
            }
          </div>

        </div>
        <div className="main_head">
          <div className="head">
            <div className="h4_div">
              <h4>Communication History</h4>
            </div>
            <div >
              <Form.Control id="seacrchbox" type="search" placeholder="serach"/>
            </div>
          </div>

          {
            showbutton?<div className="button">

              <div className="button_inner_div">
                <Button size="sm" variant="dark" onClick={smodal}><Mailbox2 className="ml-4" color="white" size="15"/> Compose Email</Button>
              </div>
              <div className="button_inner_div">
                <Button size="sm" id="whatsapp"><Whatsapp size="15"/> Send Whatapp</Button>
              </div>
              <div className="button_inner_div">
                <Button size="sm" variant="success"><ChatFill/> Send Wechat</Button>
              </div>
              <div className="button_inner_div">
                <Button size="sm"  id="call"><TelephoneFill/> Call Jay</Button>
              </div>
              <>
                <Modal show={showmodal} onHide={closemodal} centered backdrop="static">
                  <Modal.Header closeButton>
                    <Modal.Title>Email</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="label_div">
                      <label>To:</label><Form.Control type="email" value={client}/>
                    </div>
                    <div className="label_div">
                      <label>CC:</label><Form.Control type="email" value={cc}/>
                    </div>
                    <div className="label_div">
                      <label>Subject:</label><Form.Control type="text" value={subject}/>
                    </div>
                    <div className="label_div">
                      {
                        text ? <div>
                          <div>
                            <p><b>Dear Jay Shetty,</b></p>
                          </div>
                          <div>
                            <p>We need an urgent update for PO#12087633979 as we have not heard from you.Please
                              provide us an update of expected delivery date ASAP.
                            </p>
                          </div>
                          <div>
                            <p>Jones Ferdinand</p>
                            <label>Brandix Producerment Management</label>
                          </div>
                        </div> : null
                      }
                    </div>

                    <div className="label_btn">
                      <Button variant="outline-secondary" size="sm" onClick={change_cc}>Internal Milestones Updates</Button>
                      &nbsp;<Button variant="outline-secondary" size="sm" onClick={change_cc}>External Risks Updates</Button>
                      &nbsp;<Button variant="outline-secondary"  size="sm" onClick={change_cc}>Shipping Information</Button>
                    </div>


                  </Modal.Body>
                  <Modal.Footer>
                    <Button size="sm"  variant="dark">
                      Send Email
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>:null
          }
          <div className="main">
            <div className="content_button">
              <Button size="sm"  variant="dark"><Mailbox2 className="ml-4" color="white" size="15"/> Email</Button>
            </div>
            <div className="main_content">
              <div>
                <b>FW:Supplier Updates</b>
                <p>PO:#12087633979</p>
              </div>
              <div>
                <p>Received:April 21,2022</p>
                <p>Last Opened:April 23,2022</p>
              </div>
            </div>
            <div className="foot_content">
              <p>Dear Jsyasingh Sangakkara,</p> <br/>
              <p>We need an ugrent update for PO:#120399640340 as we not heard
                from you.Please Provide an upadate of th expected delivery date ASAP</p>
              <br/>
              <label>Jones Ferdinand</label>
              <p>Brandix Procurement Manager</p>
            </div>
            <div className="footer">
              <div>
                <p className="text-decoration">Reply</p>
              </div>
              <div>
                <p className="text-decoration">Reply All</p>
              </div>
              <div>
                <p className="text-decoration">Forward</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="main">
            <div className="content_button">
              <Button size="sm" id="whatsapp" variant="dark"><Whatsapp size="15"/> Whatsapp</Button>
            </div>
            <div className="main_content">
              <div>
                <p>PO:#12087633979</p>
              </div>
              <div>
                <p>April 23,2022 at 1:46PM GST</p>
              </div>
            </div>
            <div className="foot_content">
              <p>Dear Jsyasingh Sangakkara,</p> <br/>
              <p>We need an ugrent update for PO:#120399640340 as we not heard
                from you.Please Provide an upadate of th expected delivery date ASAP</p>
              <br/>
              <label>Jones Ferdinand</label>
              <p>Brandix Procurement Manager</p>
            </div>
            <div className="footer">
              <div>
                <p className="text-decoration">Reply</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="main">
            <div className="content_button">
              <Button size="sm" variant="success"><ChatFill/> Webchat</Button>
            </div>
            <div className="main_content">
              <div>
                <p>PO:#12087633979</p>
              </div>
              <div>
                <p>April 23,2022 at 1:46PM GST</p>
              </div>
            </div>
            <div className="foot_content">
              <p>Dear Jsyasingh Sangakkara,</p>
              <p>We need an ugrent update for PO:#120399640340 as we not heard
                from you.Please Provide an upadate of th expected delivery date ASAP</p>
              <br/>
              <label>Jones Ferdinand</label>
              <p>Brandix Procurement Manager</p>
            </div>
            <div className="footer">
              <div>
                <p className="text-decoration">Reply</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="main">
            <div className="content_button">
              <Button size="sm"  id="call"><TelephoneFill/> Voice Call</Button>
            </div>
            <div className="main_content">
              <div>
                <p>PO:#12087633979</p>
              </div>
              <div>
                <p>April 23,2022 at 1:46PM GST</p>
              </div>
            </div>
            <div className="footer">
              <div>
                <p className="text-decoration">Call Back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
