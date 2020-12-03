// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlipayLineSvg from '@airclass/icons-svg/lib/asn/AlipayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlipayLineSvg}></AntdIcon>;
};

AlipayLine.displayName = 'AlipayLine';
AlipayLine.inheritAttrs = false;
export default AlipayLine;