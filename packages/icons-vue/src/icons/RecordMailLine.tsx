// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RecordMailLineSvg from '@airclass/icons-svg/lib/asn/RecordMailLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RecordMailLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordMailLineSvg}></AntdIcon>;
};

RecordMailLine.displayName = 'RecordMailLine';
RecordMailLine.inheritAttrs = false;
export default RecordMailLine;