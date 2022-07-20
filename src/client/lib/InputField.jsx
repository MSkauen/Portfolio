import React from "react";

export function InputField({ id, onChangeValue, value, name, type, placeholder, multiLine, cols, rows }) {
  return (
      <>
        {multiLine ? (
            <textarea
                id={id}
                cols={cols}
                rows={rows}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChangeValue(e.target.value)}
                required
            />
        ) : (
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChangeValue(e.target.value)}
                required
            />
        )}
      </>
  );
}
