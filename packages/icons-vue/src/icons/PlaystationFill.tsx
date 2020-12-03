// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlaystationFillSvg from '@airclass/icons-svg/lib/asn/PlaystationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaystationFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlaystationFillSvg}></AntdIcon>;
};

PlaystationFill.displayName = 'PlaystationFill';
PlaystationFill.inheritAttrs = false;
export default PlaystationFill;