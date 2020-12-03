// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileLineSvg from '@airclass/icons-svg/lib/asn/FileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileLineSvg}></AntdIcon>;
};

FileLine.displayName = 'FileLine';
FileLine.inheritAttrs = false;
export default FileLine;