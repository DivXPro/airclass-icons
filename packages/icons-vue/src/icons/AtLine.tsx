// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AtLineSvg from '@airclass/icons-svg/lib/asn/AtLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AtLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AtLineSvg}></AntdIcon>;
};

AtLine.displayName = 'AtLine';
AtLine.inheritAttrs = false;
export default AtLine;