// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PixelfedLineSvg from '@airclass/icons-svg/lib/asn/PixelfedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PixelfedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PixelfedLineSvg}></AntdIcon>;
};

PixelfedLine.displayName = 'PixelfedLine';
PixelfedLine.inheritAttrs = false;
export default PixelfedLine;