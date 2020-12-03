// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DropLineSvg from '@airclass/icons-svg/lib/asn/DropLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropLineSvg}></AntdIcon>;
};

DropLine.displayName = 'DropLine';
DropLine.inheritAttrs = false;
export default DropLine;