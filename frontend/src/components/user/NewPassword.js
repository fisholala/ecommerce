import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from '../../Action/userAction'

const NewPassword = ({ history, match }) => {

    const [passward, setPassward] = useState('')
    const [confirmPassward, setConfirmPassward] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Password updated successfully')
            history.push('/login')
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('passward', passward);
        formData.set('confirmPassward', confirmPassward);

        dispatch(resetPassword(match.params.token, formData))
    }

    return (
        <Fragment>

            <MetaData title={'New Password Reset'} />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">New Password</h1>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={passward}
                                onChange={(e) => setPassward(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm_password_field">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm_password_field"
                                className="form-control"
                                value={confirmPassward}
                                onChange={(e) => setConfirmPassward(e.target.value)}
                            />
                        </div>

                        <button
                            id="new_password_button"
                            type="submit"
                            className="btn btn-block py-3">
                            Set Password
                        </button>

                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default NewPassword
