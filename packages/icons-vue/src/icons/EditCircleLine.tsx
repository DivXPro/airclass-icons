// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditCircleLineSvg from '@airclass/icons-svg/lib/asn/EditCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditCircleLineSvg}></AntdIcon>;
};

EditCircleLine.displayName = 'EditCircleLine';
EditCircleLine.inheritAttrs = false;
export default EditCircleLine;