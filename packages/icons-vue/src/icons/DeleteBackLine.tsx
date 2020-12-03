// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteBackLineSvg from '@airclass/icons-svg/lib/asn/DeleteBackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteBackLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteBackLineSvg}></AntdIcon>;
};

DeleteBackLine.displayName = 'DeleteBackLine';
DeleteBackLine.inheritAttrs = false;
export default DeleteBackLine;