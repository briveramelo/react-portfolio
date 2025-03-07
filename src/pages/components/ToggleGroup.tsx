import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { darken } from "@mui/material/styles";
import { useCustomPalette } from "../../theme/theme";

export interface ToggleOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ToggleGroupProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  const { interactable, background, text } = useCustomPalette();

  const buttonStyle = useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: { xs: 160, sm: 200 },
      backgroundColor: background.paper,
      color: text.paper,
      outline: "none",
      margin: 0.5,
      "&:hover": {
        backgroundColor: darken(background.paper, 0.2),
      },
      "&.Mui-selected": {
        backgroundColor: interactable.hovered,
        color: text.light,
        "&:hover": {
          backgroundColor: darken(interactable.hovered, 0.2),
        },
        "& svg": {
          color: text.light,
        },
        "&:hover svg": {
          color: text.light,
        },
      },
      "& svg": {
        color: text.paper,
      },
    }),
    [background.paper, text.paper, interactable.hovered, text.light],
  );

  const iconStyle = useMemo(
    () => ({
      marginRight: 8,
      height: 20,
      marginTop: -2,
      display: "flex",
      alignItems: "center",
    }),
    [],
  );

  const handleToggle = useCallback(
    (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      if (newValue !== null) {
        onChange(newValue);
      }
    },
    [onChange],
  );

  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={handleToggle}
      sx={{
        backgroundColor: background.paper,
        borderRadius: 2,
      }}
      className="pop-shadow"
    >
      {options.map((option) => (
        <ToggleButton key={option.value} value={option.value} sx={buttonStyle}>
          {option.icon &&
            React.cloneElement(option.icon as React.ReactElement, {
              style: iconStyle,
            })}
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleGroup;
