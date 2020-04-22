import React from 'react';

function ClickFeedbackIconTooltip({ hoverText, clickedText, onClick }) {

    const onClickWrapper = (e) => {
        const Toast = window.Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1113000
        });

        Toast.fire({
            type: 'success',
            title: clickedText
        })

        if (onClick) {
            onClick(e)
        }
    }
    return <>
        <span onClick={e => onClickWrapper(e)} className="actionable" data-toggle="tooltip" data-placement="top" title={hoverText} >
            <i data-feather="link" style={{ height: "1rem" }} ></i>
        </span>
    </>
}

export default ClickFeedbackIconTooltip