// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EvernoteLineSvg from '@airclass/icons-svg/lib/asn/EvernoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EvernoteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EvernoteLineSvg}></AntdIcon>;
};

EvernoteLine.displayName = 'EvernoteLine';
EvernoteLine.inheritAttrs = false;
export default EvernoteLine;