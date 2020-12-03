// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParentLineSvg from '@airclass/icons-svg/lib/asn/ParentLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParentLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParentLineSvg}></AntdIcon>;
};

ParentLine.displayName = 'ParentLine';
ParentLine.inheritAttrs = false;
export default ParentLine;