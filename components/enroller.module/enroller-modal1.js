import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Row, Col, Button, Input, Typography } from 'antd'
import { callGetApi } from 'utils/api'
import { CloseOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie'

export default function EnrollerModal(props) {
  const cookies = new Cookies()
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const referer = useSelector(state=>state.mlm.referer)
  const defaultReferer = useSelector(state=>state.mlm.defaultReferer)
  const [selectedReferer, setSelectedReferer] = useState(undefined)
  const [savingReferer, setSavingReferer] = useState(undefined)
  const [suggestingReferers, setSuggestingReferers] = useState([])
  const [searchParam, setSearchParam] = useState('')

  const fetchDefaultReferer = () => {
    // callGetApi('enroller', onGetDefaultEnroller)
  }
  const onGetDefaultEnroller = (res) => {
    dispatch({
      type: 'FETCH_DEFAULT_ENROLLEE_SUCCESS', 
      payload: res.data
    })
    setSelectedReferer(res.data)
  }
  const fetchReferer = () => {
    var username = ''
    const savedReferer = cookies.get('bepicReferer')
    if (savedReferer) {
      username = savedReferer
      username = username.toLowerCase().trim()
    } 
    const params = new URLSearchParams(window.location.search)
    if (params.has('referer')) {
      username = params.get('referer')
      username = username.toLowerCase().trim()
    }
    if (username!='') {
      // callGetApi(`enroller/${username}`, onGetEnroller, onFailEnroller)
    } else {
      fetchDefaultReferer()
    }
  }
  const onGetEnroller = (res) => {
    setSelectedReferer(res.data)
    dispatch({
      type: 'FETCH_ENROLLEE_SUCCESS', 
      payload: res.data
    })
  }
  const onFailEnroller = (err) => {
    dispatch({
      type: 'FETCH_ENROLLEE_FAILURE', 
    })
    message.error('Your referer is not correct.')
  }

  useEffect(() => {
    fetchReferer()
  }, [])  

  const onSearchType = (v) => {
    setSearchParam(v)
    setSuggestingReferers([])
    if (v=='') return

    callGetApi(`search_user/${v}`, onGetSuggestingEnrollees)
  }
  const onGetSuggestingEnrollees = (data) => {
    setSuggestingReferers(data.data)
  }
  const onSelectReferer = (referer) => {
    setSuggestingReferers([])
    setSavingReferer(referer)
  }
  const onSave = () => {
    if (savingReferer) {
      dispatch({
        type: 'FETCH_ENROLLEE_SUCCESS',
        payload: { data: savingReferer }
      })
    } 
    props.onClose()
  }

  return (<>
    <div className='modal-background' onClick={() => props.onClose()}></div>
    <div className='modal-contents' >
      {!isEditing?
        <div className=''>
          <div style={{textAlign: 'right'}}>
            <CloseOutlined onClick={() => props.onClose()} />
          </div>
          {selectedReferer && (
            selectedReferer.show_contact_info==1?
            <>
            <Row justify='space-between' align='center'>
              <Col><label>Your Enroller:</label></Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <img src={selectedReferer.image || '/images/user-icon2_inactive.svg'} 
                    className='contact-info-image'
                  />
                  <div className='contact-info-info'>
                    <p>{selectedReferer.first_name+' '+selectedReferer.last_name}</p>
                    <p>{selectedReferer.email}</p>
                    <p>{selectedReferer.phone}</p>
                  </div>
                </div>
              </Col>
            </Row>
            </>
            : <>
            <Row justify='space-between'>
              <Col><label>Your Enroller:</label></Col>
              <Col>{selectedReferer.first_name+' '+selectedReferer.last_name}</Col>
            </Row>
            </>
          )}
          <Row justify='start'>
          </Row>
        </div>
      :
        <div className=''>
          {savingReferer && (
            <>
            <Row justify='space-between'>
              <Col><label>Name:</label></Col>
              <Col>{savingReferer.first_name+' '+savingReferer.last_name}</Col>
            </Row>
            <Row justify='space-between'>
              <Col><label>Username:</label></Col>
              <Col>{savingReferer.username}</Col>
            </Row>
            </>
          )}
          <div className='user-search-form'>
            <p>Please search your referer.</p>
            <Input
              type="text"
              value={searchParam}
              onChange={(e) => onSearchType(e.target.value)}
            />
            {suggestingReferers.length > 0 && (
              <div className="suggestion-tips">
                {suggestingReferers.map((referer) => (
                  <Row 
                    onClick={() => onSelectReferer(referer)}
                    justify='space-between'
                    className='suggesting-referer'
                  >
                    <Col>
                      <Typography.Text type='secondary'>
                        {referer.first_name + " " + referer.last_name}
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Typography.Text type='secondary'>
                        <em>Username: </em>
                        {referer.username}
                      </Typography.Text>
                    </Col>
                  </Row>
                ))}
              </div>
            )}
            <Row justify='space-between' style={{ marginTop: 12 }}>
              <Col>
                <Button onClick={onSave} type='primary'>Save</Button>
              </Col>
              <Col>
                <Button onClick={()=>setIsEditing(false)}>Cancel</Button>
              </Col>
            </Row>
          </div>
        </div>
      }
      <style jsx>{`
        .modal-background {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background-color: #000;
          z-index: 1000;
          opacity: 0.6;
        }
        .user-search-form {
          position: relative;          
        }
        .suggestion-tips {
          position: absolute;
          left: 0; top: 68px;
          width: 100%;
          cursor: pointer;
          z-index: 35;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 10px;
        }
      `}</style>
    </div>
  </>)
}