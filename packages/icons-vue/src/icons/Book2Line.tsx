// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Book2LineSvg from '@airclass/icons-svg/lib/asn/Book2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Book2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Book2LineSvg}></AntdIcon>;
};

Book2Line.displayName = 'Book2Line';
Book2Line.inheritAttrs = false;
export default Book2Line;