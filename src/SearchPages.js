import React from 'react'
import './SearchPages.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPages() {
  return (
    <div className='searchPages'>
      <div className='searchPages__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://avatars.githubusercontent.com/u/78593839?v=4'
        channel='Programmer Channel'
        verified
        subs='560K'
        noOfVideos={382}
        description='If you believe you can accept it Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero quis cupiditate beatae facere eligendi perspiciatis unde eaque, nesciunt ad. '
      />

      <hr />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training'
        timestamp='10 seconds ago'
        channel='Programmer Channel'
        title='Lets Build Youtube Clone'
        image='https://i.ytimg.com/vi/UaB_Ftsdlyk/hqdefault.jpg'
      />
    </div>
  )
}

export default SearchPages
