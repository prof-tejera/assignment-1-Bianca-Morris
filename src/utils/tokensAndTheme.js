import styled from "styled-components";

// Raw color values (HEX)
export const colorTokens = {
    babyBlueLight: "#61cbf5", 
    babyBlue: "#459Fd3",
    pinkLight: "#E16BBD",
    pinkDarker: "#B64995",
    redLight: "#D34545",
    redDarker: "#A42323",
    tealLight: "#45D3AD",
    tealDarker: "#419786",
    white: "#FFFFFF",
    purpleLight: "#617cb7",
    purpleMedium: "#2b3254",
};

// Raw color values w/transparency (RGBA)
export const specialColorTokens = {
    babyBlueLight: "rgba(143,229,255,0.9)",
    purpleMedium: "rgba(0,20,168,0.8)"
}

// Values used across components for styling of specific areas
export const themeColors = {
    // Buttons
    btnPrimary: colorTokens.tealLight,
    btnPrimaryHover: colorTokens.tealDarker,
    btnSecondary: colorTokens.pinkLight,
    btnSecondaryHover: colorTokens.pinkDarker,
    btnDanger: colorTokens.redLight,
    btnDangerHover: colorTokens.redDarker,
    // Inputs
    inputBackground: colorTokens.white,
    inputPlaceholder: colorTokens.babyBlue,
    // Text
    textLight: colorTokens.white,
    textMedium: colorTokens.babyBlue,
    textDark: colorTokens.purpleMedium,
    // Timer Switcher
    timerSwitchTitle: colorTokens.purpleMedium,
    timerSwitchTitleActive: colorTokens.babyBlueLight,
    timerSelectorGradient1: colorTokens.purpleLight,
    timerSelectorGradient2: colorTokens.purpleMedium,
    // Timer Background
    timerBgGradient1: specialColorTokens.babyBlueLight,
    timerBgGradient2: specialColorTokens.purpleMedium
};

// Shared Basic Typography Styles
export const H1 = styled.div`
    font-family: Lobster;
    font-size: 2rem;
`;