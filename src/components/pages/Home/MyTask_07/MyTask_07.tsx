import {
  MyTaskWrapper,
  FloatSection,
  SpecialText,
  Title,
  FloatBox,
  Text,
  FloatBoxSecond,
  TextSecond,
  PositionSection,
  PositionedText,
  TextWithSticky,
  DefinitionList,
  DefinitionTerm,
  DefinitionDescription
} from "./styles";

function MyTask_07() {
  return (
    <>
      <MyTaskWrapper>
        <FloatSection>
          <Title>Float</Title>
          <FloatBox>Float Box</FloatBox>
          <SpecialText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet.
          </SpecialText>
          <Text>
            Sed auctor cursus massa at porta. Integer ligula ipsum, tristique
            sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
            neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam
            erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
            sollicitudin eros pharetra congue. Duis ornare egestas augue ut
            luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
            ornare felis, eget fermentum sapien.
          </Text>

          <TextSecond>
            <FloatBoxSecond>Float Box</FloatBoxSecond>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est. Nam id risus quis ante semper consectetur
            eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
            suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus
            eu urna eget velit cursus viverra quis vestibulum sem. Aliquam
            tincidunt eget purus in interdum. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </TextSecond>
        </FloatSection>

        <PositionSection>
          <Title>Sticky positioning</Title>
          <TextWithSticky>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
            ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
            volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
            sollicitudin eros pharetra congue. Duis ornare egestas augue ut
            luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
            ornare felis, eget fermentum sapien. 
            <PositionedText>Sticky text</PositionedText>
            Nam vulputate diam nec tempor
            bibendum. Donec luctus augue eget malesuada ultrices. Phasellus
            turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id
            risus quis ante semper consectetur eget aliquam lorem. Vivamus
            tristique elit dolor, sed pretium metus suscipit vel. Mauris
            ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
            cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in
            interdum. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia
            lorem placerat vulputate. Duis felis orci, pulvinar id metus ut,
            rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
            tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
            ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
            Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
            convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet
            turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
            ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
            commodo et a urna. Ut id ornare felis, eget fermentum sapien.
          </TextWithSticky>
        </PositionSection>

        <PositionSection>
          <Title>Sticky positioning 2 - Definition List</Title>
          <TextWithSticky>
            <DefinitionList>
                <DefinitionTerm>A</DefinitionTerm>
                <DefinitionDescription>Apple</DefinitionDescription>
                <DefinitionDescription>Ant</DefinitionDescription>
                <DefinitionDescription>Altimeter</DefinitionDescription>
                <DefinitionDescription>Airplane</DefinitionDescription>
                <DefinitionTerm>B</DefinitionTerm>
                <dd>Bird</dd>
                <dd>Buzzard</dd>
                <dd>Bee</dd>
                <dd>Banana</dd>
                <dd>Beanstalk</dd>
                <dd>C</dd>
                <dd>Calculator</dd>
                <dd>Cane</dd>
                <dd>Camera</dd>
                <dd>Camel</dd>
                <DefinitionTerm>D</DefinitionTerm>
                <dd>Duck</dd>
                <dd>Dime</dd>
                <dd>Dipstick</dd>
                <dd>Drone</dd>
                <DefinitionTerm>E</DefinitionTerm>
                <dd>Egg</dd>
                <dd>Elephant</dd>
                <dd>Egret</dd>
                <dd>Enamy</dd>
                <dd>Eddy</dd>
                <dd>Eddy</dd>
                <dd>Erdbarry</dd>

            </DefinitionList>
          </TextWithSticky>
        </PositionSection>
      </MyTaskWrapper>
    </>
  );
}

export default MyTask_07;
