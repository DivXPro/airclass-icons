// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RecordCircleFillSvg from '@airclass/icons-svg/lib/asn/RecordCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RecordCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleFillSvg}></AntdIcon>;
};

RecordCircleFill.displayName = 'RecordCircleFill';
RecordCircleFill.inheritAttrs = false;
export default RecordCircleFill;