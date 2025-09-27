import React from "react";

export interface ValidationMessagesProps {
  messages?: string[] | null | undefined;
  visible?: boolean;
  className?: string;
}

export const ValidationMessages: React.FC<ValidationMessagesProps> = ({
  visible = false,
  messages = [],
  className = "",
}) => {
  if (!visible || !Array.isArray(messages) || messages.length === 0)
    return null;

  return (
    <div className={`min-ui-validation-messages ${className}`.trim()}>
      {messages.map((msg, idx) => (
        <div key={idx} className="min-ui-validation-message">
          {msg}
        </div>
      ))}
    </div>
  );
};

ValidationMessages.displayName = "ValidationMessages";

export default ValidationMessages;
