
import React from 'react';

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="max-w-xl mx-auto bg-red-900 border-2 border-red-700 text-red-200 px-4 py-3 rounded-lg relative" role="alert">
            <strong className="font-bold">오류 발생! </strong>
            <span className="block sm:inline">{message}</span>
        </div>
    );
};
