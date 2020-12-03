// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MarkPenLineSvg from '@airclass/icons-svg/lib/asn/MarkPenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MarkPenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MarkPenLineSvg}></AntdIcon>;
};

MarkPenLine.displayName = 'MarkPenLine';
MarkPenLine.inheritAttrs = false;
export default MarkPenLine;