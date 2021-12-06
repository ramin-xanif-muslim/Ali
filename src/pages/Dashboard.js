import moment from 'moment';
import React from 'react'

function Dashboard() {
    const today = new Date().toLocaleDateString(undefined, {  
        day:   'numeric',
        month: 'numeric',
        year:  'numeric',
    });
    return (
        <div>
            {today}
        </div>
    )
}

export default Dashboard
