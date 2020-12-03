// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EdgeLineSvg from '@airclass/icons-svg/lib/asn/EdgeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EdgeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EdgeLineSvg}></AntdIcon>;
};

EdgeLine.displayName = 'EdgeLine';
EdgeLine.inheritAttrs = false;
export default EdgeLine;