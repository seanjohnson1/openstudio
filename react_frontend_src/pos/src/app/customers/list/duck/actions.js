import T from './types'


export const requestCustomers = () =>
    ({
        type: T.REQUEST_CUSTOMERS
    })

export const receiveCustomers = (data) =>
    ({
        type: T.RECEIVE_CUSTOMERS,
        data
    })

// export const setCheckinClassAttendanceLoaded = (loaded) =>
//     ({
//         type: T.CHECKIN_SET_CLASS_ATTENDANCE_LOADED,
//         loaded
//     })

// export const setCheckinClassAttendanceLoading = (loading) =>
//     ({
//         type: T.CHECKIN_SET_CLASS_ATTENDANCE_LOADING,
//         loading
//     })

// export const setCheckinClassAttendanceSearchCustomerID = (search_id) =>
//     ({
//         type: T.CHECKIN_SET_CLASS_ATTENDANCE_SEARCH_CUSTOMER_ID,
//         search_id,
//     })

export const clearSearchTimeout = () =>
    ({
        type: T.CLEAR_SEARCH_TIMEOUT
    })

export const setSearchTimeout = (timeout) =>
    ({
        type: T.SET_SEARCH_TIMEOUT,
        timeout,
    })