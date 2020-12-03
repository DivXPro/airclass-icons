// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GatsbyLineSvg from '@airclass/icons-svg/lib/asn/GatsbyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GatsbyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GatsbyLineSvg}></AntdIcon>;
};

GatsbyLine.displayName = 'GatsbyLine';
GatsbyLine.inheritAttrs = false;
export default GatsbyLine;