// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GamepadFillSvg from '@airclass/icons-svg/lib/asn/GamepadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GamepadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GamepadFillSvg}></AntdIcon>;
};

GamepadFill.displayName = 'GamepadFill';
GamepadFill.inheritAttrs = false;
export default GamepadFill;