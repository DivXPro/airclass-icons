// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GameFillSvg from '@airclass/icons-svg/lib/asn/GameFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GameFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameFillSvg}></AntdIcon>;
};

GameFill.displayName = 'GameFill';
GameFill.inheritAttrs = false;
export default GameFill;