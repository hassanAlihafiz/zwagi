import React, { useEffect, useState } from 'react';
import "./progressbar.less";


export default function ProgressBar ({width, percent}) {
  return (
    <div className="progress-div" style={{ width: `${width}%`}}>
      <div style={{ width: `${percent}%` }} className="progress" />
    </div>
  );
}