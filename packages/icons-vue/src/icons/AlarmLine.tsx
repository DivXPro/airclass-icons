// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlarmLineSvg from '@airclass/icons-svg/lib/asn/AlarmLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlarmLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmLineSvg}></AntdIcon>;
};

AlarmLine.displayName = 'AlarmLine';
AlarmLine.inheritAttrs = false;
export default AlarmLine;