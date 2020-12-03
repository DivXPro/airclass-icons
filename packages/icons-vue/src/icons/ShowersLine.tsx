// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShowersLineSvg from '@airclass/icons-svg/lib/asn/ShowersLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShowersLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShowersLineSvg}></AntdIcon>;
};

ShowersLine.displayName = 'ShowersLine';
ShowersLine.inheritAttrs = false;
export default ShowersLine;